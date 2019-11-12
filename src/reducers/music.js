import {ActionTypes} from '../actions/ActionTypes';

const track = {
  id: 'abc',
  url:
    require("../assets/metallica.mp3"), // Load media from the network
  title: 'Enter Sandman',
  artist: 'Metallica',
  album: 'while(1<2)',
  genre: 'Progressive House, Electro House',
  date: '2014-05-20T07:00:00+00:00', // RFC 3339

  artwork:
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d7ae21af-7b8f-4f38-9c0c-e89de27923c9/daq33xv-2182a482-ba8b-40bf-9bf0-9e00c68906a0.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q3YWUyMWFmLTdiOGYtNGYzOC05YzBjLWU4OWRlMjc5MjNjOVwvZGFxMzN4di0yMTgyYTQ4Mi1iYThiLTQwYmYtOWJmMC05ZTAwYzY4OTA2YTAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.8si4126BjCQI1KbeDuH0Hz3p3tRtYf-k92CXfi9KPzo', // Load artwork from the network
};

const initialState = {
  tracks: {abc: track},
};

export const music = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
