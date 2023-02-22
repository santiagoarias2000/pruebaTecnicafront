class UserLoginService {
    public static async consumirService(urlApi: string, myObj: any) {
      const information = {
        method: "POST",
        body: JSON.stringify(myObj),
        headers: { "Content-Type": "application/json; charset=UTF-8" },
      };
      const resultApi = fetch(urlApi, information)
        .then((reciveInfo) => reciveInfo.json()) 
        .then((myInfo) => {
          return myInfo;
        })
        .catch((myError) => { return myError; });
        
        return resultApi;
    }
  }
  export default UserLoginService;