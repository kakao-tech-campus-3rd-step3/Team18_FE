// import { http, HttpResponse, type PathParams } from 'msw';
// import { mockClubDetail } from '@/mocks/repositories/clubDetail';

// export const clubDetailHandlers = [
//   http.get('/api/clubs/:clubId', ({ params }: { params: PathParams }) => {
//     const { clubId } = params;
//     const club = mockClubDetail.find((c) => c.id === Number(clubId));

//     if (!club) {
//       return new HttpResponse('Not Found', { status: 404 });
//     }

//     return HttpResponse.json(club, { status: 200 });
//   }),
// ];
