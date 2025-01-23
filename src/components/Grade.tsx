import { Badge } from "@chakra-ui/react";

interface Props {
  grade: number;
}

const Grade = ({ grade }: Props) => {
  const color: string = grade > 7.5 ? "green" : grade > 6 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize="16px" paddingX={2} borderRadius="4px">
      {grade}
    </Badge>
  );
};

export default Grade;
