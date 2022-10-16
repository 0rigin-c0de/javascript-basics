// There is another statement called switch statement
// This statement provides cleaner,
//more structured construction when you have several simple decisions to make.

// This example of code demonstrates how the switch statement works;

putstr("Enter a month name");
var monthNum = readline();
var monthName;
switch(monthNum){
    case "1":
        monthName="January";
        break;
        case "2":
            monthName="February";
            break;
            case "3":
                monthName="March";
                break;
                case "4":
                    monthName="April";
                    break;
                    case "5":
                        monthName="May";
                        break;
                        case "6":
                            monthName="June";
                            break;
                            case "7":
                                monthName="July";
                                break;
                                case "8":
                                    monthName="August";
                                    break;
                                    case "9":
                                        monthName="September";
                                        break;
                                        case "10":
                                            monthName="October";
                                            break;
                                            case "11":
                                                monthName="November";
                                                break;
                                                case "12":
                                                    monthName="December";
                                                    break;
                                                    default:
                                                    console.log("Bad Input");

    }
