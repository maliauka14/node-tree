**Technical Task:**
Please complete the test task described at the link below: https://test.vmarmysh.com/user/demo
You need to use the existing Swagger documentation to learn the server API. After that, set a unique tree name for your own tree, for example, a GUID, so that candidates can perform the task simultaneously. Create your own version of an editable tree similar to the provided demo, add popup windows with edit and create functionalities, and ensure that it is responsive.

**Solution:**

- For requests, it was decided to use Axios. Based on it, a function was created that returns a custom hook. Since each operation uses POST for requests, useEffect had to be used. However, a solution for GET requests was also created.
- The FSD (Feature-Sliced Design) architecture was chosen.
- During the work, 7 components were created.
- For status display, the ready-made solution from notistack was used.
- The react-icons library was chosen for the icons.

Возможности для улучшения
покрытие тестами
валидация данных с помощью react-hook-form для отправляемых и zod для принимаемых
переместить вывод ошибки при запросе в интерсептор