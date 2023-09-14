(function() {
    'use strict';

    CKEDITOR.plugins.add('embedPDF', {
        requires: 'widget',
        icons: 'PDF',
        lang: ['en', 'uk'],

        init: function(editor) {
            editor.filter.addElementCallback(function(element) {
                if (element.name === 'object' && element.attributes.type === 'application/pdf') {
                    return CKEDITOR.FILTER_SKIP_TREE;
                }
            });

            editor.widgets.add('PDF', {
                button: editor.lang.embedPDF.toolbar.button_label,
                dialog: 'PDF',
                template: '<object type="application/pdf" data="" width="100%" height="500"></object>',
                allowedContent: 'object[!type,!data,width,height]',
                requiredContent: 'object[type,data]',

                init: function () {
                    var width = this.element.getAttribute('width'),
                        height = this.element.getAttribute('height'),
                        url = this.element.getAttribute('data');

                    if (width) {
                        this.setData('width', width);
                    }

                    if (height) {
                        this.setData('height', height);
                    }

                    if (url) {
                        this.setData('url', url);
                    }
                },

                data: function () {
                    if (!this.data.width) {
                        this.element.removeAttribute('width');
                    } else {
                        this.element.setAttribute('width', this.data.width);
                    }

                    if (!this.data.height) {
                        this.element.removeAttribute('height');
                    } else {
                        this.element.setAttribute('height', this.data.height);
                    }

                    if (!this.data.url) {
                        this.element.removeAttribute('data');
                    } else {
                        this.element.setAttribute('data', this.data.url);
                    }
                },

                upcast: function(element) {
                    return element.name === 'object' && element.attributes.type === 'application/pdf';
                },
            });

            CKEDITOR.dialog.add('PDF', this.path + 'dialogs/PDF.js');
        },
    });
}());
