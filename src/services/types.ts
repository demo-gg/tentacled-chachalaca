export type MessagePriority = "low" | "normal" | "high" | "critical";

export type NotificationStatus = "pending" | "sent" | "failed" | "retrying";

export interface NotificationEvent {
  id: string;
  type: string;
  timestamp: number;
  source: string;
  severity?: MessagePriority;
}

export interface NotificationResult {
  success: boolean;
  messageTs?: string;
  channelId?: string;
  error?: {
    code: string;
    message: string;
  };
  attempt: number;
  duration: number;
}

export interface BatchNotificationOptions {
  concurrency?: number;
  stopOnFirstError?: boolean;
  timeout?: number;
}
