export interface TimeLog {
    id: number;            
    date: Date;              
    timeIn: Date;           
    timeOut: Date | null;    
    totalHours?: number;     
    userId: number;          
  }
  