import React from "react";

import { InfoCard, DivAvatar, Image, UserName, Tag, Location,UserStatsSpan,UserStatsLi,UserStats,SpanOfScores } from "./description.style";

export const Description = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <InfoCard>
      <DivAvatar>
        <Image src={avatar} alt={`${username} photo`} class="avatar" />
        <UserName>{username}</UserName>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </DivAvatar>

      <UserStats>
        <UserStatsLi>
          <UserStatsSpan className="label">Followers</UserStatsSpan>
          <SpanOfScores className="quantity">{stats.followers}</SpanOfScores>
        </UserStatsLi>
        <UserStatsLi>
          <UserStatsSpan className="label">Views</UserStatsSpan>
          <SpanOfScores className="quantity">{stats.views}</SpanOfScores>
        </UserStatsLi>
        <UserStatsLi>
          <UserStatsSpan className="label">Likes</UserStatsSpan>
          <SpanOfScores className="quantity">{stats.likes}</SpanOfScores>
        </UserStatsLi>
      </UserStats>
    </InfoCard>
  );
};
