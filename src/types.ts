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
    pomos: Number;
    totalPomos: Number;

    constructor(content: String, totalPomos: Number) {
        this.id = uuidv4();
        this.completed = false;
        this.active = false;
        this.content = content;
        this.pomos = 0;
        this.totalPomos = totalPomos;
    }
}

class TimerSettings {
    pomodoroTime: Number = 25 * 60;
    breakTime: Number = 5 * 60;
    longBreakTime: Number = 15 * 60;
    modesTimes = new Map<TimerModes, Number>(
        [
            [TimerModes.Pomodoro,  25 * 60],
            [TimerModes.Break, 5],
            [TimerModes.LongBreak, 15],
        ]);

    constructor(pomodoroTime: Number, breakTime: Number, longBreakTime: Number) {
        this.pomodoroTime = pomodoroTime * 60;
        this.breakTime = breakTime * 60;
        this.longBreakTime = longBreakTime * 60;
        this.modesTimes.set(TimerModes.Pomodoro, this.pomodoroTime);
        this.modesTimes.set(TimerModes.Break, this.breakTime);
        this.modesTimes.set(TimerModes.LongBreak, this.longBreakTime);
    }

    public getModeTime(mode: TimerModes) {
        return this.modesTimes.get(mode);
    }
}

export {
    TimerModes,
    Todo,
    TimerSettings,
};