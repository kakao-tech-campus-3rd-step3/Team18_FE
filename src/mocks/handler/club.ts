import { http, HttpResponse } from 'msw';
import { clubRepoitory } from '../repositories/club';

const getClubsResolver = () => {
  const clubs = clubRepoitory.getClubs();
  return HttpResponse.json({ clubs }, { status: 200 });
};

export const handlers = [http.get('/api/clubs', getClubsResolver)];
