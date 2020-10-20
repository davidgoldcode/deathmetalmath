import React from "react";
import Card from "@material-ui/core/Card";

const Result = ({ results }) => {
  return (
    <Card id="calcResults" variant="outlined">
      {results || 0}
    </Card>
  );
};

export default Result;
