import { Badge } from "@chakra-ui/react";

interface Props {
  release_date: Date;
}

const Release_Date = ({ release_date }: Props) => {
  return (
    <Badge colorScheme="white" fontSize="16px" paddingX={2} borderRadius="4px">
      {release_date.toLocaleDateString()}
    </Badge>
  );
};

export default Release_Date;
