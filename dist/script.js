var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
{
    var tasks_1 = [];
    var hideDoneTasks_1 = false;
    var removeTask_1 = function (index) {
        tasks_1 = __spreadArrays(tasks_1.slice(0, index), tasks_1.slice(index + 1));
        render_1();
    };
    var addNewTask_1 = function () {
        var newTaskContent = (document.querySelector(".js-newTask")).value.trim();
        var markAllTasksCompltedButton = document.querySelector(".js-markAllDoneTasks");
        if (newTaskContent !== "") {
            tasks_1 = __spreadArrays(tasks_1, [
                {
                    content: newTaskContent,
                    done: false
                },
            ]);
            render_1();
        }
        document.querySelector(".js-newTask").value = "";
    };
    var toggleTaskDone_1 = function (doneButton, index) {
        tasks_1 = __spreadArrays(tasks_1.slice(0, index), [
            __assign(__assign({}, tasks_1[index]), { done: !tasks_1[index].done })
        ], tasks_1.slice(index + 1));
        render_1();
    };
    var toggleHideCompletedTasks_1 = function () {
        hideDoneTasks_1 = !hideDoneTasks_1;
        render_1();
    };
    var markAllTasksComplted_1 = function () {
        tasks_1 = tasks_1.map(function (task) { return (__assign(__assign({}, task), { done: true })); });
        render_1();
    };
    var bindTasksListener_1 = function () {
        var form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit_1);
        var removeButtons = document.querySelectorAll(".js-remove");
        removeButtons.forEach(function (removeButton, index) {
            removeButton.addEventListener("click", function () {
                removeTask_1(index);
            });
        });
        var doneButtons = document.querySelectorAll(".js-done");
        doneButtons.forEach(function (doneButton, index) {
            doneButton.addEventListener("click", function () {
                toggleTaskDone_1(doneButton, index);
            });
        });
    };
    var bindTopButtonsListener_1 = function () {
        var toggleCompletedTasksButton = document.querySelector(".js-toggleHideAllDoneTasks");
        toggleCompletedTasksButton.addEventListener("click", toggleHideCompletedTasks_1);
        var markAllTasksCompltedButton = document.querySelector(".js-markAllDoneTasks");
        markAllTasksCompltedButton.addEventListener("click", markAllTasksComplted_1);
    };
    var renderTaskContent_1 = function () {
        var htmlText = "";
        for (var _i = 0, tasks_2 = tasks_1; _i < tasks_2.length; _i++) {
            var task = tasks_2[_i];
            htmlText += "<li class=\"section__taskItem " + (task.done && hideDoneTasks_1 ? "section__taskItem--hidden" : "") + "\">\n        <button class=\"taskItem__button taskItem__button--doneTask js-done\">\n    " + (task.done ? '<i class="js-checkIcon fas fa-check"></i>' : "") + "\n        </button>\n        <p class=\"js-paragraph list__paragraph " + (task.done ? "list__paragraph--done" : "") + "\" > " + task.content + "</p> \n        <button class=\" taskItem__button taskItem__button--removeTask js-remove\">\n          <i class=\"fas fa-trash\"></i></button>\n       </button>\n      </li>";
        }
        document.querySelector(".js-taskList").innerHTML = htmlText;
    };
    var renderButtons_1 = function () {
        var htmlButtonsText = "\n      <button class=\"section__button js-toggleHideAllDoneTasks\"" + (tasks_1.every(function (_a) {
            var done = _a.done;
            return !done;
        }) ? "disabled" : "") + ">\n        " + (hideDoneTasks_1 ? "show" : "hide") + " completed tasks\n      </button>\n      <button class=\"section__button js-markAllDoneTasks\" " + (tasks_1.every(function (_a) {
            var done = _a.done;
            return done;
        }) ? "disabled" : "") + ">\n        Mark all tasks as completed\n      </button>\n      ";
        var sectionButton = document.querySelector(".section__toggleButtons");
        sectionButton.innerHTML = htmlButtonsText;
        if (tasks_1.length) {
            sectionButton.classList.remove("section__button--hidden");
        }
        else {
            sectionButton.classList.add("section__button--hidden");
        }
    };
    var onFormSubmit_1 = function (event) {
        event.preventDefault();
        addNewTask_1();
        document.querySelector(".js-newTask").focus();
    };
    var render_1 = function () {
        renderButtons_1();
        renderTaskContent_1();
        bindTopButtonsListener_1();
        bindTasksListener_1();
    };
    var init = function () {
        render_1();
    };
    init();
}
