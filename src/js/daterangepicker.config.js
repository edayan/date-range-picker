$(function() {

    function startStartDatePicker() {
        $('#start-datetimepicker').dateRangePicker({
            time: {
                enabled: true
            },
            singleMonth: true,
            singleDate: true,
            startDate: false,
            endDate: false,
            endDateField: false,
            format: 'DD.MM.YYYY HH:mm',
            autoClose: false,
            tableId: 'start-date-table',
            getSelectedEndDate: function() {
                return ($('#date-time-fixed').data('end'));
            },
            setDateToDom: function(time) {
                $('#date-time-fixed').data('start', time);
                return;
            },
            setValue: function(s, s1, s2) {
                $('#start-date-range').val(s1);
            },
            showShortcuts: false,
            beforeShowDay: function(t) {
                var yesterday = new Date().setDate(new Date().getDate() - 1);
                var valid = !((t <= yesterday) ||
                    (this.getSelectedEndDate() ? t > this.getSelectedEndDate() : false));
                var _class = '';
                var _tooltip = valid ? '' : (t <= yesterday) ? 'Cannot select previous dates' : 'Arrival date cannot be after departure date';
                return [valid, _class, _tooltip];
            }
        }, this);
    };

    function startEndDatePicker() {
        $('#end-datetimepicker').dateRangePicker({
            time: {
                enabled: true
            },
            singleMonth: true,
            singleDate: true,
            endDate: false,
            format: 'DD.MM.YYYY HH:mm',
            autoClose: false,
            endDateField: true,
            tableId: 'end-date-table',
            askToSelectStartDateFirst: function() {
                alert('Please select arrival date first');
            },
            getSelectedStartDate: function() {
                return ($('#date-time-fixed').data('start'));
            },
            setDateToDom: function(time) {
                $('#date-time-fixed').data('end', time);
                return;
            },
            setValue: function(s, s1, s2) {
                $('#end-date-range').val(s2);
            },
            showShortcuts: false,
            beforeShowDay: function(t) {
                if (this.getSelectedStartDate()) {
                    var valid = !(t < this.getSelectedStartDate());
                    var _class = '';
                    var _tooltip = valid ? '' : 'Departure date cannot be before arrival date';
                    return [valid, _class, _tooltip];
                }
                return [true, _class, _tooltip];
            }
        }, this);
    };

    startStartDatePicker();
    startEndDatePicker();

});
