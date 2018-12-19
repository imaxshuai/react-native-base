export const ParamsErr = (err)=>{
    let dropdown = DropDownHolder.getDropDown();

    if(err.response.data.error_details){
        if(err.response.data.error_details[0])
            return dropdown.alertWithType('info',  err.response.data.error_details[0].error_message);
        else
            return dropdown.alertWithType('info',  err.response.data.error_details.error_message);
    }else if (err.response.data.error_message) {
        return dropdown.alertWithType('info', err.response.data.error_message);
    }else{
        return dropdown.alertWithType('info', err.response.data.message);
    }
};