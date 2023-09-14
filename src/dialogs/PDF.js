(function () {
    'use strict';

    CKEDITOR.dialog.add('PDF', function (editor) {
	    var regexSizeOrEmpty = /(^\s*(\d+)(px|%)?\s*$)|^$/i;
        function validateSize() {
            var match = this.getValue().match( regexSizeOrEmpty ),
                isValid = !!(match && parseInt(match[1], 10) !== 0);

            if (!isValid) {
                alert(editor.lang.embedPDF.error['invalid_' + this.id]);
            }

            return isValid;
        }

        return {
            title: editor.lang.embedPDF.dialog.title,
            minWidth: 400,
            minHeight: 85,
            contents: [
                {
                    id: 'basic-tab',
                    elements: [
                        {
                            type: 'hbox',
                            widths: ['90%', '10%'],
                            children: [
                                {
                                    id: 'url',
                                    type: 'text',
                                    label: editor.lang.embedPDF.dialog.url_label,
                                    validate: CKEDITOR.dialog.validate.notEmpty(editor.lang.embedPDF.error.empty_url_field),
                                    setup: function (widget) {
                                        this.setValue(widget.data.url);
                                    },
                                    commit: function (widget) {
                                        widget.setData('url', this.getValue());
                                    },
                                },
                                {
                                    id: 'browse',
                                    type: 'button',
                                    label: editor.lang.embedPDF.dialog.browse_label,
                                    style: 'margin-top: 19px',
                                    hidden: true,
                                    filebrowser: 'basic-tab:url',
                                }
                            ],
                        },
                        {
                            type: 'hbox',
                            widths: ['50%', '50%'],
                            children: [
                                {
                                    id: 'width',
                                    type: 'text',
                                    label: editor.lang.embedPDF.dialog.width_label,
                                    validate: validateSize,
                                    setup: function (widget) {
                                        this.setValue(widget.data.width);
                                    },
                                    commit: function (widget) {
                                        widget.setData('width', this.getValue());
                                    }
                                },
                                {
                                    id: 'height',
                                    type: 'text',
                                    label: editor.lang.embedPDF.dialog.height_label,
                                    validate: validateSize,
                                    setup: function (widget) {
                                        this.setValue(widget.data.height);
                                    },
                                    commit: function (widget) {
                                        widget.setData('height', this.getValue());
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        };
    });
}());
