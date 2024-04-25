# vagabondoro-timer
Simple pomodoro timer made with Tauri + Vue 3 + TypeScript.

![image](https://github.com/Sztakler/vagabondoro-timer/assets/58264262/b969f982-c58c-446e-b3c9-a498fd647f21)


# Instruction

To run: `bun run tauri dev` in main catalogue.

# What it is?

I needed a simple, distraction free tool to track time I spend working and to manage my daily tasks, so I decided to use this opportunity to train my skills in Typescript and Vue.

Application design is minimal, featuring a panel from manga *Vagabond*. Color scheme is based on [Kanagawa theme](https://github.com/rebelot/kanagawa.nvim) for Neovim editor.

# What it does?

Currently app allows user to edit tasklist and select tasks they want to work at the time. Timer tracks time spent on selected task and increments number of completed *pomos* (pomodoro sessions).

Timer automatically switches between *pomos* and _breaks_, entering *long break* after four consecutive sessions. It also displays approximated time of finishing task.

User can add, edit and remove tasks as well as marking them as completed or uncompleted. Completed tasks may be hidden from view to prevent distractions.

Application is responsive, designed in a mobile first fashion.



# Purpose and Features
In search of a solution to manage my work time and daily tasks, I decided to use this opportunity to hone my skills in Typescript and Vue. My work resulted in sleek application designed to minimize distractions and maximize productivity.

Inspired by the simplicity of a panel from the manga _Vagabond_, the application boasts a minimalist design. Its color scheme draws from the serene aesthetics of the [Kanagawa theme](https://github.com/rebelot/kanagawa.nvim) for the Neovim editor, fostering a tranquil work environment.

# Functionality
At its core, the app empowers users to effortlessly edit their task list and prioritize their workload. Users can seamlessly select tasks to tackle, while a dedicated timer tracks the time spent on each task, incrementing the count of completed "pomos" (pomodoro sessions) along the way.

The timer seamlessly transition between focused work sessions and breaks. After four consecutive pomos, it ushers in a long break. Additionally, the app provides an estimated time of task completion, keeping users informed and motivated.

Users wield full control over their task list, with the ability to add, edit, or remove tasks at will. Tasks can also be marked as completed or reverted to their original state. To minimize distractions, completed tasks can be hidden from view, ensuring focus.

Designed with responsiveness in mind, the application prioritizes mobile usability, catering to the needs of users across various devices.

[Usage demonstration](https://github.com/Sztakler/vagabondoro-timer/assets/58264262/a517a769-bd31-4805-8321-cd5d19877faa)


