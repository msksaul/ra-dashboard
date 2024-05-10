import { Card, Skeleton } from "antd";

const ProjectCardSkeleton = () => {
  return (
    <Card
      size="small"
      bodyStyle={{
        display: "flex",
        justifyContent: "center",
        gap: "8px",
      }}
      title={
        <Skeleton.Button
          active
          size="small"
          style={{
            width: "170px",
            height: "22px",
            marginLeft: '8px'
          }}
        />
      }
    >
      <Skeleton.Button
        active
        size="small"
        style={{
          width: "170px",
          marginRight: 'auto'
        }}
      />
      <Skeleton.Avatar active size="small" />
    </Card>
  );
};

export default ProjectCardSkeleton;