import instance from "./instance";

const filmService = {

    listMovies: () => {
        return instance.get(`/movies`,{
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }
}
export default filmService;