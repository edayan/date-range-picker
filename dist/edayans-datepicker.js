$(function()
{
  var selectedStartDate,
      selectedDate,
      dayInSelectedStartDate ;


  function startStartDatePicker() {
    $('#start-datetimepicker').dateRangePicker(
    {
      time: {
  		    enabled: true
  	  },
      singleMonth: true,
      singleDate:true,
      startDate: false,
  	  endDate: false,
      endDateField: false,
      format: 'DD.MM.YYYY HH:mm',
      autoClose: false,
      tableId:'start-date-table',
      getSelectedEndDate: function () {
        return ($('#date-time-fixed').data('end'));
      },
      setDateToDom: function (time) {
        $('#date-time-fixed').data('start', time);
        return;
      },
    	// getValue: function()
    	// {
    	// 	if ($('#start-date-range').val() && $('#end-date-range').val() )
    	// 		return $('#start-date-range').val() + ' to ' + $('#end-date-range').val();
    	// 	else
    	// 		return '';
    	// },
    	setValue: function(s,s1,s2)
    	{
    		$('#start-date-range').val(s1);
    		//$('#end-date-range').val(s2);
    	}
    }).bind('datepicker-first-date-selected', function(event, obj) {

      	/* This event will be triggered when first date is selected */
        event.stopPropagation();
        //if (!$('#start-date-range').val()){
          selectedDate = obj.date1;
          dayInSelectedStartDate = selectedDate.getDate();
          selectedStartDate = getFormattedDate(selectedDate);
          selectedTime = getFormatedTime(selectedDate);
          $('#start-date-range').val(selectedStartDate + " " + selectedTime);
        //}

        //second date already selected.User is trying to change the start date.
        // if ($('#end-date-range').val()) {
        //   $('#end-date-range').val('');
        // }

    });
  };





  function getFormattedDate(todayTime) {
      var month = todayTime.getMonth() + 1;
      var day = todayTime.getDate();
      var year = todayTime.getFullYear();
      return day + "." + month + "." + year;
  };

  function getFormatedTime (todayTime) {
    var hours = todayTime.getHours();
    var minutes = todayTime.getMinutes();
    return   hours + ":" + minutes;
  };

  function closeStartDatePicker () {
    $('#start-datetimepicker').data('dateRangePicker').close();
  };

  function openStartDatePicker () {
    $('#start-datetimepicker').data('dateRangePicker').open();
  };

  function destroyStartDatePicker () {
    $('#start-datetimepicker').data('dateRangePicker').destroy()
  }

  function closeEndDatePicker () {
    $('#end-datetimepicker').data('dateRangePicker').close();
  };

  function openEndDatePicker () {
    $('#end-datetimepicker').data('dateRangePicker').open();
  };

  function destroyEndDatePicker () {
    $('#end-datetimepicker').data('dateRangePicker').destroy()
  };




  function startEndDatePicker() {
    $('#end-datetimepicker').dateRangePicker({
      time: {
  		    enabled: true
  	  },
      singleMonth: true,
      singleDate:true,
      //startDate: selectedStartDate,
  	  endDate: false,
      format: 'DD.MM.YYYY HH:mm',
      autoClose: false,
      endDateField:true,
      tableId:'end-date-table',
    	// getValue: function()
    	// {
    	// 	if ($('#start-date-range').val() && $('#end-date-range').val() )
    	// 		return $('#start-date-range').val() + ' to ' + $('#end-date-range').val();
    	// 	else
    	// 		return '';
    	// },
      askToSelectStartDateFirst: function () {
        alert ('select first date first');
      },
      getSelectedStartDate: function () {
        return ($('#date-time-fixed').data('start'));
      },
      setDateToDom: function (time) {
        $('#date-time-fixed').data('end', time);
        return;
      },
    	setValue: function(s,s1,s2)
    	{
    		//$('#end-date-range').val(s1);
    		$('#end-date-range').val(s2);
    	}
    }).bind('datepicker-opened',function() {
        // if (dayInSelectedStartDate) {
        //     var today = new Date(),
        //         element = $('#end-date-table').find('td div').filter(function() {
        //           return $(this).text() == new String(dayInSelectedStartDate)
        //         });
        //     if(element && element[0]) {
        //       element[0].click();
        //     }
        //   }
    }).bind('datepicker-change', function (event,obj) {
        // event.stopPropagation();
        // destroyStartDatePicker();
        // selectedStartDate = null;
        // selectedDate = null;
        // dayInSelectedStartDate = null;
        // startStartDatePicker();
    });
  };

  startStartDatePicker();
  startEndDatePicker();

});
