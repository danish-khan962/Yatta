import { Posts } from "../../sanity.types";

export type PostTypeCard = Omit<Posts, 'creator'> & {creator ? : "Creator"};