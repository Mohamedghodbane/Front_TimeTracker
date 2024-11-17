export interface LeaveRequest {
    id?: number; 
    startDate: Date | null;
    endDate: Date | null;
    reason: string;
    status?: string; 
    createdAt?: Date; 
    username?: string;
  }
  