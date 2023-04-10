// window.addEventListener('load', () => {
//     const form = document.querySelector("#new-task-form");
//     const input = document.querySelector("#new-task-input");
//     const list_el = document.querySelector("#tasks");

//     saveLocalTodos(input.value);

//     function saveLocalTodos(todo) {
//         let todos;
//         if (localStorage.getItem("todos") === null) {
//             todos = [];
//         } else {
//             todos = JSON.parse(localStorage.getItem("todos"));
//         }
//         todos.push(todo);
//         localStorage.setItem("todos", JSON.stringify(todos));
//     }

//     form.addEventListener('submit', (e) => {
//         e.preventDefault();

//         const task = input.value;

//         const task_el = document.createElement('div');
//         task_el.classList.add('task');

//         const task_content_el = document.createElement('div');
//         task_content_el.classList.add('content');

//         task_el.appendChild(task_content_el);

//         const task_input_el = document.createElement('input');
//         task_input_el.classList.add('text');
//         task_input_el.type = 'text';
//         task_input_el.value = task;
//         task_input_el.setAttribute('readonly', 'readonly');

//         task_content_el.appendChild(task_input_el);

//         const task_actions_el = document.createElement('div');
//         task_actions_el.classList.add('actions');

//         const task_edit_el = document.createElement('button');
//         task_edit_el.classList.add('edit');
//         task_edit_el.innerText = 'Edit';

//         const task_delete_el = document.createElement('button');
//         task_delete_el.classList.add('delete');
//         task_delete_el.innerText = 'Delete';

//         task_actions_el.appendChild(task_edit_el);
//         task_actions_el.appendChild(task_delete_el);

//         task_el.appendChild(task_actions_el);

//         const task_done_el = document.createElement('input');
//         task_done_el.classList.add('done');
//         task_done_el.type = 'checkbox';
//         task_content_el.appendChild(task_done_el);

//         list_el.appendChild(task_el);

//         input.value = '';

//         task_edit_el.addEventListener('click', (e) => {
//             if (task_edit_el.innerText.toLowerCase() == "edit") {
//                 task_edit_el.innerText = "Save";
//                 task_input_el.removeAttribute("readonly");
//                 task_input_el.focus();
//             } else {
//                 task_edit_el.innerText = "Edit";
//                 task_input_el.setAttribute("readonly", "readonly");
//             }
//         });

//         task_delete_el.addEventListener('click', (e) => {
//             list_el.removeChild(task_el);
//         });

//         task_done_el.addEventListener('change', (e) => {
//             if (task_done_el.checked) {
//                 task_el.classList.add('completed');
//             } else {
//                 task_el.classList.remove('completed');
//             }
//         });
//     });
// });




window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    loadLocalTodos();

    function loadLocalTodos() {
        let todos;
        if (localStorage.getItem("todos") === null) {
            todos = [];
        } else {
            todos = JSON.parse(localStorage.getItem("todos"));
        }
        todos.forEach(todo => {
            const task_el = document.createElement('div');
            task_el.classList.add('task');

            const task_content_el = document.createElement('div');
            task_content_el.classList.add('content');

            task_el.appendChild(task_content_el);

            const task_input_el = document.createElement('input');
            task_input_el.classList.add('text');
            task_input_el.type = 'text';
            task_input_el.value = todo;
            task_input_el.setAttribute('readonly', 'readonly');

            task_content_el.appendChild(task_input_el);

            const task_actions_el = document.createElement('div');
            task_actions_el.classList.add('actions');

            const task_edit_el = document.createElement('button');
            task_edit_el.classList.add('edit');
            task_edit_el.innerText = 'Edit';

            const task_delete_el = document.createElement('button');
            task_delete_el.classList.add('delete');
            task_delete_el.innerText = 'Delete';

            task_actions_el.appendChild(task_edit_el);
            task_actions_el.appendChild(task_delete_el);

            task_el.appendChild(task_actions_el);
            
            const task_done_el = document.createElement('input');
            task_done_el.classList.add('done');
            task_done_el.type = 'checkbox';
            task_content_el.appendChild(task_done_el);

            list_el.appendChild(task_el);

            task_edit_el.addEventListener('click', (e) => {
                if (task_edit_el.innerText.toLowerCase() == "edit") {
                    task_edit_el.innerText = "Save";
                    task_input_el.removeAttribute("readonly");
                    task_input_el.focus();
                } else {
                    task_edit_el.innerText = "Edit";
                    task_input_el.setAttribute("readonly", "readonly");
                    saveLocalTodos();
                }
            });

            task_delete_el.addEventListener('click', (e) => {
                list_el.removeChild(task_el);
                saveLocalTodos();
            });

            task_done_el.addEventListener('change', (e) => {
                if (task_done_el.checked) {
                    task_el.classList.add('completed');
                } else {
                    task_el.classList.remove('completed');
                }
                saveLocalTodos();
            });
        });
    }

    function saveLocalTodos() {
        const todos = Array.from(list_el.children).map(todo_el => {
            return todo_el.querySelector('.text').value;
        });
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly', 'readonly');

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');

        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerText = 'Edit';

        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerText = 'Delete';

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);

        input.value = "";

        task_edit_el.addEventListener('click', (e) => {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_edit_el.innerText = "Save";
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
            } else {
                task_edit_el.innerText = "Edit";
                task_input_el.setAttribute("readonly", "readonly");
                saveLocalTodos();
            }
        });

        task_delete_el.addEventListener('click', (e) => {
            list_el.removeChild(task_el);
            saveLocalTodos();
        });

        saveLocalTodos();
    });
});




// window.addEventListener('load', () => {
//     const form = document.querySelector("#new-task-form");
//     const input = document.querySelector("#new-task-input");
//     const list_el = document.querySelector("#tasks");
  
//     loadLocalTodos();
  
//     function loadLocalTodos() {
//       let todos;
//       if (localStorage.getItem("todos") === null) {
//         todos = [];
//       } else {
//         todos = JSON.parse(localStorage.getItem("todos"));
//       }
//       todos.forEach(todo => {
//         const task_el = createTaskElement(todo.task, todo.done);
//         list_el.appendChild(task_el);
//       });
//     }
  
//     function createTaskElement(task, done) {
//       const task_el = document.createElement('div');
//       task_el.classList.add('task');
//       if (done) {
//         task_el.classList.add('done');
//       }
  
//       const task_content_el = document.createElement('div');
//       task_content_el.classList.add('content');
  
//       task_el.appendChild(task_content_el);
  
//       const task_input_el = document.createElement('input');
//       task_input_el.classList.add('text');
//       task_input_el.type = 'text';
//       task_input_el.value = task;
//       task_input_el.setAttribute('readonly', 'readonly');
  
//       task_content_el.appendChild(task_input_el);
  
//       const task_actions_el = document.createElement('div');
//       task_actions_el.classList.add('actions');
  
//       const task_edit_el = document.createElement('button');
//       task_edit_el.classList.add('edit');
//       task_edit_el.innerText = 'Edit';
  
//       const task_delete_el = document.createElement('button');
//       task_delete_el.classList.add('delete');
//       task_delete_el.innerText = 'Delete';
  
//       task_actions_el.appendChild(task_edit_el);
//       task_actions_el.appendChild(task_delete_el);
  
//       task_el.appendChild(task_actions_el);
  
//       task_edit_el.addEventListener('click', (e) => {
//         if (task_edit_el.innerText.toLowerCase() == "edit") {
//           task_edit_el.innerText = "Save";
//           task_input_el.removeAttribute("readonly");
//           task_input_el.focus();
//         } else {
//           task_edit_el.innerText = "Edit";
//           task_input_el.setAttribute("readonly", "readonly");
//           saveLocalTodos();
//         }
//       });
  
//       task_delete_el.addEventListener('click', (e) => {
//         list_el.removeChild(task_el);
//         saveLocalTodos();
//       });
  
//       task_input_el.addEventListener('change', (e) => {
//         task_el.classList.toggle('done');
//         saveLocalTodos();
//       });
  
//       return task_el;
//     }
  
//     function saveLocalTodos() {
//       const todos = Array.from(list_el.children).map(todo_el => {
//         return {
//           task: todo_el.querySelector('.text').value,
//           done: todo_el.classList.contains('done')
//         };
//       });
//       localStorage.setItem("todos", JSON.stringify(todos));
//     }
  
//     form.addEventListener('submit', (e) => {
//       e.preventDefault();
  
//       const task = input.value;
  
//       const task_el = createTaskElement(task, false);
//       list_el.appendChild(task_el);
  
//       input.value = "";
  
//       saveLocalTodos();
//     });
//   });
  
