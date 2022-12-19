import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

// const mockData = [
//   {
//     id: "m1",
//     title: "This is a first meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
//   {
//     id: "m2",
//     title: "This is a second meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a second, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
// ];

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  const getAllMeetups = () => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-ef1c9-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetupsArr = [];

        for(const key in data) {
            const meetup = {
                id: key,
                ...data[key]
            };
            meetupsArr.push(meetup);
        }

        setIsLoading(false);
        setMeetups(meetupsArr);
      });
  };

  useEffect(() => getAllMeetups(), []);

  return (
    <div>
      <h1>All Meetups Page</h1>
      {isLoading ? (
        <p>Loading Meetups...</p>
      ) : (
        <MeetupList meetupList={meetups} />
      )}
    </div>
  );
}

export default AllMeetupsPage;
