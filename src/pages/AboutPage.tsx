import React from 'react'

export const AboutPage: React.FC = React.memo(() => {
  return (
    <div className="about">
      <h1>Тестовое задание на позицию frontend разработчика</h1>
      <p>
        Необходимо разработать React-приложение для отображения таблицы с
        данными.
      </p>
      <h2>Функционал</h2>
      <ul>
        <li>
          Сортировка по столбцам: при нажатии на название столбца строки таблицы
          сортируются по возрастанию, при повторном клике — по убыванию.
          Графическим элементом или текстовым сообщением указывается направление
          сортировки.
        </li>
        <li>
          Клиентская пагинация: данные необходимо отображать постранично,
          максимум 50 элементов на страницу. Необходимо предоставить
          пользовательскую навигацию для перехода по страницам.
        </li>
        <li>
          Фильтрация: компонент предоставляет текстовое поле, в которое
          пользователь может ввести текст и строки таблицы, данные которых не
          содержат подстроку, введённую пользователем, скрываются.
          Перефильтрация осуществляется по нажатию на кнопку "Найти".
        </li>
        <li>
          По клике на строку таблицы значения полей выводятся в дополнительном
          блоке под таблицей.
        </li>
        <li>
          Данные в таблицу загружаются с сервера. Способ загрузки с сервера на
          ваш выбор.
        </li>
        <li>
          Над таблицей присутсвует кнопка добавить, по нажатии на которую
          выпадает форма добавления ряда
          <pre>| id | firstName | lastName | email | phone |</pre>
          <pre>| input | input | input | input | input |</pre>
        </li>
        <li>
          После заполнения всех инпутов активируется кнопка
          <b> Добавить в таблицу</b> которая вставляет заполненный ряд в начало
          таблицы
        </li>
      </ul>
      <p>
        Для демонстрации работы компонента необходимо сделать простую HTML
        страницу. Пользователю предлагается выбрать набор данных: маленький или
        большой. При выборе набора данных он загружается с сервера и по данным
        строится таблица.
      </p>

      <h3>Формат данных от сервера</h3>
      <div className="json-block">
        <pre>[</pre>
        <pre> {'{'}</pre>
        <pre> id: 101,</pre>
        <pre> firstName: 'Sue',</pre>
        <pre> lastName: 'Corson',</pre>
        <pre> email: 'DWhalley@in.gov',</pre>
        <pre> phone: '(612)211-6296',</pre>
        <pre> address: {'{'}</pre>
        <pre> streetAddress: '9792 Mattis Ct',</pre>
        <pre> city: 'Waukesha',</pre>
        <pre> state: 'WI',</pre>
        <pre> {'}'},</pre>
        <pre> description: 'et lacus magna dolor...'</pre>
        <pre> {'}'}</pre>
        <pre>]</pre>
      </div>
      <p>
        Маленький объем данных берется по ссылке:
        <a
          href="http://www.filltext.com/
                    ?rows=32&id={number|1000}
                    &firstName={firstName}
                    &lastName={lastName}
                    &email={email}
                    &phone={phone|(xxx)xxx-xx-xx}
                    &address={addressObject}
                    &description={lorem|32"
        >
          Маленький
        </a>
      </p>
      <p>
        Большой объем данных берется по ссылке:
        <a
          href="http://www.filltext.com/
                    ?rows=1000&id={number|1000}
                    &firstName={firstName}
                    &delay=3&lastName={lastName}
                    &email={email}
                    &phone={phone|(xxx)xxx-xx-xx}
                    &address={addressObject}
                    &description={lorem|32}"
        >
          Большой
        </a>
      </p>
      <h3>Замечания</h3>
      <ul>
        <li>
          Особое внимание следует уделить скорости работы. Зависание интерфейса
          при выполнении операций загрузки данных, фильтрации, сортировки
          недопустимо.
        </li>
        <li>Во время загрузки данных стоит показать какой-то индикатор</li>
        <li>
          Использование сторонних библиотек будет плюсом только в случае если
          это оправданно и вы сможете объяснить причину выбора. Показав свои
          знания в грамотном применении сторонних готовых решений, вы имеете
          шанс повысить свою профессиональную привлекательность для нас.
        </li>
        <li>
          Пишите код так, как бы вы его писали в работе — внутренности задания
          будут оцениваться даже тщательней, чем внешнее соответствие заданию.
          Код должен быть организован так, чтобы его можно было заново
          использовать.
        </li>
        <li>Помните про обработку ошибок!</li>
        <li>
          Верстка может быть самая простая. Визуализацию и украшение делайте на
          ваш вкус. Мы не против использования Bootstrap или похожего UI
          фреймворк, но только для UI представления (нельзя использовать JS код
          для решения задачи, но можно использовать для оформительских эффектов
          (анимации и тому подобное))!
        </li>
      </ul>
      <h3>Схема визуального представления данных</h3>
      <div className="json-block">
        <pre>
          +------+------------+-----------------+-----------------+---------------+
        </pre>
        <pre>| id ▲ | firstName ▼| lastName ▼ | email ▼| phone ▼|</pre>
        <pre>
          +------+------------+-----------------+-----------------+---------------+
        </pre>
        <pre>| 101 | Sue | Corson | DWhalley@in.gov | (612)211-6296 |</pre>
        <pre>
          +------+------------+-----------------+-----------------+---------------+
        </pre>
        <pre>| 102 | Lor | Ipsumd | dwhalley@in.gov | (612)211-6296 |</pre>
        <pre>
          +------+------------+-----------------+-----------------+---------------+
        </pre>
        <pre>| 103 | Ips | Umdolo | dwhalley@in.gov | (612)211-6296 |</pre>
        <pre>
          +------+------------+-----------------+-----------------+---------------+
        </pre>
      </div>
      <p>
        Если выделен пользователем с id = 101, то под таблицей выводим следующую
        информацию:
      </p>
      <div className="json-block">
        <pre>
          Выбран пользователь {'<b>'}Sue Corson{'</b>'}
        </pre>
        <pre>Описание:</pre>
        <pre>{'<textarea>'}</pre>
        <pre>et lacus magna dolor...</pre>
        <pre>{'</textarea>'}</pre>
        <pre>
          Адрес проживания: {'<b>'}9792 Mattis Ct{'</b>'}
        </pre>
        <pre>
          Город: {'<b>'}Waukesha{'</b>'}
        </pre>
        <pre>
          Провинция/штат: {'<b>'}WI{'</b>'}
        </pre>
        <pre>
          Индекс: {'<b>'}22178{'</b>'}
        </pre>
      </div>
      <p>
        Дополнительно напишите нам, как вы тестировали результат своей работы.
        Какие используете инструменты и как вы осуществляете тестирование.
      </p>
    </div>
  )
})
