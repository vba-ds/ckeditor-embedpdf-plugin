(function () {
    'use strict';

    CKEDITOR.plugins.setLang('embedPDF', 'uk', {
        toolbar: {
            button_label: 'PDF файл',
        },
        dialog: {
            browse_label: 'Огляд Сервера',
            height_label: 'Висота',
            title: 'Вставити PDF файл',
            url_label: 'URL',
            width_label: 'Ширина',
        },
        error: {
            empty_url_field: 'Вкажіть URL файлу',
            invalid_height: 'Значення "Висота" недопустимо',
            invalid_width: 'Значення "Ширина" недопустиме',
        },
    });
}());
