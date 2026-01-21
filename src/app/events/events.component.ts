import { Component, OnInit, signal, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FromInput } from './from-input/from-input';
import { BtnDelete } from './btn-delete/btn-delete';

export interface Event {
  id: string;
  name: string;
  type: 'click' | 'lead' | 'sale';
  createdAt: Date;
}

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, FromInput, BtnDelete],
  templateUrl: './events.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent implements OnInit {
  events = signal<Event[]>([]);
  eventName: string = '';
  eventType: 'click' | 'lead' | 'sale' = 'click';
  
  private readonly STORAGE_KEY = 'events_data';
  private platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadEvents();
    }
  }

  addEvent(): void {
    if (!this.eventName.trim()) {
      return;
    }

    const newEvent: Event = {
      id: Date.now().toString(),
      name: this.eventName.trim(),
      type: this.eventType,
      createdAt: new Date()
    };

    this.events.update(events => [...events, newEvent]);
    this.saveEvents();
    this.eventName = '';
  }

  deleteEvent(id: string): void {
    this.events.update(events => events.filter(event => event.id !== id));
    this.saveEvents();
  }

  getTotalEvents(): number {
    return this.events().length;
  }

  getEventsByType(type: 'click' | 'lead' | 'sale'): number {
    return this.events().filter(event => event.type === type).length;
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleString('uk-UA', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  }

  private saveEvents(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    
    try {
      const eventsData = JSON.stringify(this.events());
      localStorage.setItem(this.STORAGE_KEY, eventsData);
    } catch (error) {
      console.error('Помилка збереження подій:', error);
    }
  }

  private loadEvents(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    
    try {
      const storedData = localStorage.getItem(this.STORAGE_KEY);
      if (storedData) {
        const events: Event[] = JSON.parse(storedData).map((event: any) => ({
          ...event,
          createdAt: new Date(event.createdAt)
        }));
        this.events.set(events);
      }
    } catch (error) {
      console.error('Помилка завантаження подій:', error);
    }
  }
}
