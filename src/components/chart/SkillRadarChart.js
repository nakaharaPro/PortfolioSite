import React from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
} from 'recharts';

//practical(実務) sef(自己学習) 
const data = [
  {
    subject: 'JavaScript', practical: 30, selfLearning: 30, fullMark: 100,
  },
  {
    subject: 'React.js', practical: 0, selfLearning: 50, fullMark: 100,
  },
  {
    subject: 'Firebase', practical: 0, selfLearning: 75, fullMark: 100,
  },
 
  {
    subject: 'Python', practical: 0, selfLearning: 40, fullMark: 100,
  },
  {
    subject: 'Flutter', practical: 0, selfLearning: 85, fullMark: 100,
  },
  {
    subject: 'Java(SpringBoot)', practical: 90, selfLearning: 70, fullMark: 100,
  },
  {
    subject: 'RDB(SQL)', practical: 60, selfLearning: 50, fullMark: 100,
  },
  {
    subject: 'Mybatis', practical: 80, selfLearning: 70, fullMark: 100,
  },
  {
    subject: 'HTML/CSS', practical: 95, selfLearning: 95, fullMark: 100,
  },

];

function SkillRadarChart() {
  return (
    <div style={{ width: '100%', height: 500 }}>
      <ResponsiveContainer>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          {/* PolarGrid: 枠線の色変更 */}
          <PolarGrid stroke="#000" />

          {/* PolarAngleAxis: テキストの色変更 */}
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#000', fontSize: 14 }} />

          {/* PolarRadiusAxis: テキストの色を変更 */}
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#000', fontSize: 12 }} />

          {/* Radar: 実務スキルと自己学習スキル */}
          <Radar name="実務経験" dataKey="practical" stroke="#00125E" fill="#00125E" fillOpacity={0.6} />
          <Radar name="自己学習経験" dataKey="selfLearning" stroke="#006882" fill="#006882" fillOpacity={0.6} />

          {/* Tooltip と Legend */}
          <Tooltip />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SkillRadarChart;
