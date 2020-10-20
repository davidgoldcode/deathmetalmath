import React from "react";
import Card from "@material-ui/core/Card";

const Result = ({ results }) => {
  return (
    <Card className="calcResults" variant="outlined">
      {results || 0}
    </Card>
  );
};

export default Result;
