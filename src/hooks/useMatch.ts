import { useContext } from "react";
import { MatchContext } from "../contexts/MatchContext";

export function useMatch() {
  const value = useContext(MatchContext);

  return value;
}
