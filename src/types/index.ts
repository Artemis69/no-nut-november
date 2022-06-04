export interface Day {
  status:
    | "passed"
    | "failed"
    | "missed"
    | "pending"
    | "not available yet"
    | "answer later";
  day: number;
}

export type Days = Day[];
