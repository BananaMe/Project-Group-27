import instanceA from "./instanceA";

const userService = {

    registerUser: (userDto) => {
        return instanceA.post("authentication/register", userDto,{
            headers: {
                'Content-Type': 'application/json',
            }
        });
    },

    loginUser: (userDto) => {
        return instanceA.post("authentication/login", userDto,{
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }

}
export default userService;