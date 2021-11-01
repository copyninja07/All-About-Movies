import styled from "styled-components";

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 280px;
  box-shadow: 0 3px 10px 0 #aaa;
  cursor: pointer;
`;

const CoverImage = styled.img`
  object-fit: cover;
  height: 362px;
`;

const MovieName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const InfoColume = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const MovieInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  text-transform: capitalize;
`;

const movieComponent = (props) => {
  const tem = props.movie.show;
  const Title = tem.name;
  const Year = tem.premiered;
  const imdbID = tem.externals.imdb;

  const Poster = getImage(tem.image);
  const Type = tem.type;

  function getImage(imgObj) {
    if (
      imgObj != null &&
      imgObj !== undefined &&
      imgObj.original != null &&
      imgObj.original !== undefined
    ) {
      return imgObj.original;
    } else {
      return "";
    }
  }

  //   const { Title, Year, imdbID, Type, Poster } = props.movie.show;
  return (
    <MovieContainer
      onClick={() => {
        props.onMovieSelect({ imdbID });
      }}
    >
      <CoverImage src={Poster} />
      <MovieName>{Title}</MovieName>
      <InfoColume>
        <MovieInfo>Year: {Year}</MovieInfo>
        <MovieInfo>Type:{Type}</MovieInfo>
      </InfoColume>
    </MovieContainer>
  );
};

export default movieComponent;
