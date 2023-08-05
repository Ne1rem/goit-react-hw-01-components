import styled from 'styled-components'

export const InfoCard = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  border: 1px solid #e9eef3;
  border-radius: 5px;
  box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.75); 
  margin: auto;
  margin-top: 40px;
  margin-bottom: 80px;
`

export const DivAvatar = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;

  color: #000000;
`
export const Image = styled.img`
border: 3px solid #e9eef3;
border-radius: 50%;
width:100px;
height:100px;
margin-top: 30px;
margin-bottom: 30px;
`
export const UserName = styled.p`
font-weight: 700;
  text-transform: uppercase;

  margin-bottom: 10px;
`
export const Tag = styled.p`
margin-bottom: 10px;
color: #8585ad;
`
export const Location = styled.p`
margin-bottom: 30px;
  color: #8585ad;
`
export const UserStats = styled.ul`
align-items: center;
    background-color: #e9eef3;
    border-top: 1px solid #ddd;
    display: flex;
    justify-content: center;
    width: 100%;
    margin:0px auto;
    padding: 0px;
    :last-child{
        border-right: none;
    }
}
`
export const UserStatsLi = styled.li`
display: flex;
  flex-direction: column;
  align-items: center;

  padding: 15px;

  border-right: 1px solid #dddddd;
`
export const UserStatsSpan = styled.span`
font-size: 12px;
margin-bottom: 5px;
`

export const SpanOfScores = styled.span`
font-weight: 700;`