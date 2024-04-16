import Navbar from "@/components/Navbar";
import ThreadCard from "@/features/thread/components/ThreadCard";
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import DumyProfile from "@/mocks/profile.json";
import ProfileCard from "@/components/ProfileCard";
import SuggestedForYouCard from "@/components/Suggested";
import DumySuggested from "@/mocks/suggested.json";
import UseThreads from "@/features/thread/hooks/Usethreads";
import { IThreadCard } from "@/utils/interface/IThreadCard";
import FormThread from "@/features/thread/components/FormThread";
import { useSelector } from "react-redux";
import { RootState } from "@/stores/types/rootState";

const Home: React.FC = () => {
  const [profiles, setProfiles] = React.useState<IMyProfileCard[]>(DumyProfile);
  const [suggested, setSuggested] =
    React.useState<ISuggestedForYouCard[]>(DumySuggested);
  const { threads, getThreads, isLoading } = UseThreads();
  useSelector((state: RootState) => state.auth);

  React.useEffect(() => {
    getThreads();
  }, []);

  React.useEffect(() => {
    setProfiles(DumyProfile);
    setSuggested(DumySuggested);
  }, []);

  console.log(threads);

  return (
    <Box bg="#242424" color="rgba(255, 255, 255, 0.87)" display="flex" gap={2}>
      <Navbar />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="start"
        alignItems="start"
        gap={4}
        flex="1"
        w={"100%"}
        p={4}
      >
        <FormThread />
        <Box display="flex" flexDirection="column" gap={4}>
          {!isLoading ? (
            threads.map((data: IThreadCard) => (
              <ThreadCard
                key={data.id}
                {...data}
              />
            ))
          ) : (
            <Text
              textAlign="center"
              position="relative"
              w="100%"
              fontSize="2xl"
              fontWeight="bold"
              color="white"
            >
              Wait a second...
            </Text>
          )}
        </Box>
      </Box>
      <Box flex="1" display="flex" flexDirection="column" gap={4}>
        {profiles.map((data: IMyProfileCard, index: number) => (
          <ProfileCard
            key={index}
            author_picture={data.author_picture}
            author_banner={data.author_banner}
            author_full_name={data.author_full_name}
            author_username={data.author_username}
            bio={data.bio}
            following_count={data.following_count}
            followers_count={data.followers_count}
          />
        ))}
        <Box>
          {suggested.map((data: ISuggestedForYouCard, index: number) => (
            <SuggestedForYouCard
              key={index}
              author_picture={data.author_picture}
              author_fullname={data.author_fullname}
              author_username={data.author_username}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
