import React from 'react';
import {Card} from "./Card";

export default {
    title: 'Atoms/Card',
    component: Card,
};

const Template = (args) => <Card {...args} />;

export const AllMoviesCard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AllMoviesCard.args = {
    image: "https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg",
    title: "Avatar",
    desc: "Description about the movie. Description about the movie. Description about the movie",
    isLiked: true,
    button: undefined,
    rating: 5,
    isFavorites: false
};

export const FavoritesCard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FavoritesCard.args = {
    image: "https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg",
    title: "Avatar",
    isFavorites: true
};


