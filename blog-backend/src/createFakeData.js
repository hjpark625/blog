import Post from './models/post';

export default function createFakeData() {
  // 0, 1, ... 39로 이루어진 배열을 생성한 후 포스트 데이터로 변환
  const posts = [...Array(40).keys()].map((i) => ({
    title: `포스트 #${i}`,
    // https://www.lipsum.com/에서 복사한 200자 이상의 텍스트
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis dui nec ipsum tincidunt blandit a a lectus. Sed at mauris dolor. Integer congue a urna eget feugiat. Fusce scelerisque magna sed tristique bibendum. Donec venenatis erat a arcu tempus, vel viverra tortor finibus. Quisque nec lorem vitae eros lobortis gravida. Nullam eget magna id ligula venenatis interdum id vitae libero. Morbi facilisis massa id purus consectetur pellentesque quis lacinia enim. Vestibulum sit amet hendrerit ante, at pretium lectus. Nunc non sagittis nisi. Pellentesque mattis ipsum diam. Morbi accumsan egestas molestie. Duis nisi magna, auctor non erat ac, gravida sodales lorem.',
    tags: ['가짜', '데이터'],
  }));

  Post.insertMany(posts, (err, docs) => {
    console.log(docs);
  });
}
