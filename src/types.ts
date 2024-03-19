import {v4 as uuidv4} from 'uuid';

enum TimerModes {
    Pomodoro,
    Break,
    LongBreak,
}

class Todo {
    id: String;
    completed: Boolean;
    active: Boolean;
    content: String;
    pomos: number;
    totalPomos: number;

    constructor(content: String, totalPomos: number) {
        this.id = uuidv4();
        this.completed = false;
        this.active = false;
        this.content = content;
        this.pomos = 0;
        this.totalPomos = totalPomos;
    }
}

class TimerSettings {
    pomodoroTime: number = 25 * 60;
    breakTime: number = 5 * 60;
    longBreakTime: number = 15 * 60;
    modesTimes = new Map<TimerModes, number>(
        [
            [TimerModes.Pomodoro,  25 * 60],
            [TimerModes.Break, 5 * 60],
            [TimerModes.LongBreak, 15 * 60],
        ]);

    constructor(pomodoroTime: number, breakTime: number, longBreakTime: number) {
        this.pomodoroTime = pomodoroTime * 60;
        this.breakTime = breakTime * 60;
        this.longBreakTime = longBreakTime * 60;
        this.modesTimes.set(TimerModes.Pomodoro, this.pomodoroTime);
        this.modesTimes.set(TimerModes.Break, this.breakTime);
        this.modesTimes.set(TimerModes.LongBreak, this.longBreakTime);
    }

    public getModeTime(mode: TimerModes): number {
        return this.modesTimes.get(mode)!;
    }
}

export {
    TimerModes,
    Todo,
    TimerSettings,
};