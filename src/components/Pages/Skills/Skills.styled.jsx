import styled from 'styled-components';

export const SkillsSection = styled.div`
  margin-bottom: 1rem;

  h2 {
    font-weight: 900;
    margin-bottom: .5rem;
  }
`;
export const SkillsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(120px, 1fr));
  grid-gap: 1rem;
`;

export const SkillsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.primaryColor};
  padding: .8rem;
  text-transform: uppercase;
  font-weight: 600;
  gap: .5rem;

  i {
    font-size: 4rem;
    color: ${({ theme }) => theme.primaryColor};

    &.bxl-html5 {
      color: #dc5633;
    }

    &.bxl-css3 {
      color: #236db5;
    }

    &.bxl-javascript {
      color: #f2df44;
    }

    &.bxl-react {
      color: #6fd6f6;
    }

    &.bxl-redux {
      color: #754ab7;
    }

    &.bxl-bootstrap {
      color: #553d78;
    }

    &.bxl-nodejs {
      color: #579c4a;
    }

    &.bxl-php {
      color: #787ab0;
    }

    &.bxl-postgresql {
      color: #37658f;
    }

    &.bxl-mongodb {
      color: #2aa855;
    }
  }

  img {
    width: 65px;
    height: 65px;
  }
`;
