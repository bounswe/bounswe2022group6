// AUTHOR: BEDIRHAN PAMUKCUOGLU
// AUTHENTICATION END POINTS 
// LOGIN REQUEST

export default AuthAPI = () => {

    export const handleLoginRequest = async (mail, password) => {
        baseurl = "http://18.206.229.240:8000/";
        console.log(mail, password)
    
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "csrftoken=6dxfJjSizpYVyqWGFHvGGLbHCsLrT99U; sessionid=5fbwt9emt2umx4ntcejaav7ltvzhg11g");
    
        var formdata = new FormData();
        formdata.append("useridentifier", mail);
        formdata.append("password", password);
    
        await fetch("http://18.206.229.240:8000/login", {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        }).then(function (response) {
            return response.json();
        })
            .then((responseJson) => {
                if (responseJson.error) {
                    return alert(responseJson.error)
                } else {
    
                    return alert(responseJson.info)
                }
            })
            .catch(err => {
                console.log(err)
                return err
            })
    }
    
    
    export const handleSignUpRequest = async (mail, password, username, gender, birth_day, birth_month, birth_year) => {
        baseurl = "http://18.206.229.240:8000/";
        console.log(mail, password)
      
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "csrftoken=6dxfJjSizpYVyqWGFHvGGLbHCsLrT99U; sessionid=5fbwt9emt2umx4ntcejaav7ltvzhg11g");
      
        var formdata = new FormData();
        formdata.append("mail", mail);
        formdata.append("password", password);
        formdata.append("username", mail);
        formdata.append("gender", password);
        formdata.append("birth_date", mail);
        formdata.append("birth_month", password);
        formdata.append("birth_year", password);
      
        await fetch("http://18.206.229.240:8000/login", {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        }).then(function (response) {
          return response.json();
        })
          .then((responseJson) => {
            if (responseJson.error) {
              return alert(responseJson.error)
            } else {
          
              return alert(responseJson.info)
            }
          })
          .catch(err => {
            console.log(err)
            return err
          })
      }
        

}

