(function () {
    'use strict';

    CKEDITOR.plugins.setLang('embedPDF', 'uk', {
        toolbar: {
            button_label: 'PDF file',
        },
        dialog: {
            browse_label: 'Browse',
            height_label: 'Height',
            title: 'Embed PDF file',
            url_label: 'URL',
            width_label: 'Width',
        },
        error: {
            empty_url_field: 'Fill URL field',
            invalid_height: 'Invalid "Height" value',
            invalid_width: 'Invalid "Width" value',
        },
    });
}());
