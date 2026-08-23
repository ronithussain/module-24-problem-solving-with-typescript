function getAgeRatingAccess(age: number): string {
  // write your code here
  if (age < 7) {
    return "Everyone";
  } else if (age >= 7 && age <= 12) {
    return "Everyone 10+";
  } else if (age >= 13 && age <= 16) {
    return "Teen";
  }
  return "Mature";
}

// console.log(getAgeRatingAccess(5));
// console.log(getAgeRatingAccess(10));
// console.log(getAgeRatingAccess(15));
// console.log(getAgeRatingAccess(20));

// Problem-2_____________________________________
function getSignalStatus(strength: number): string {
  // write your code here
  if (strength < 0 || strength > 100) {
    return "Invalid signal strength";
  }
  return strength >= 0 && strength <= 20
    ? "Weak"
    : strength <= 50
      ? "Fair"
      : strength <= 80
        ? "Good"
        : strength <= 100
          ? "Excillent"
          : "Normal";
}

// console.log(getSignalStatus(10));
// console.log(getSignalStatus(35));
// console.log(getSignalStatus(65));
// console.log(getSignalStatus(95));
// console.log(getSignalStatus(-101));

// Problem-3_____________________________________
interface EsportPlayerInfo {
  username: string;
  level: number;
  region: string;
}
const formatPlayerCard = (player: EsportPlayerInfo) => {
  // console.log(player);
  const { username, level, region } = player;

  return ` ${username} is a Level ${level} player from ${region}.`;
};
const user = {
  username: "ShadowByte",
  level: 42,
  region: "Asia",
};
// console.log(formatPlayerCard(user));

// Problem-4_____________________________________:
interface Track {
  title: string;
  minutes: number;
}
function calculateTotalListeningTime(tracks: Track[]): number {
  // write your code here
  return tracks.reduce((sum, item) => sum + item.minutes, 0);
}
const tracks = [
  { title: "Blinding Lights", minutes: 3 },
  { title: "Levitating", minutes: 4 },
  { title: "Peaches", minutes: 3 },
];

// console.log(calculateTotalListeningTime(tracks));;
// 10

// another example:
const tracks2 = [
  { title: "Flowers", minutes: 3 },
  { title: "Anti-Hero", minutes: 4 },
];

// console.log(calculateTotalListeningTime(tracks2));

// Problem-5_____________________________________
interface Player {
  name: string;
  scores: number[];
}
interface PlayerObj {
  name: string;
  rank: string;
  average: number;
}
function getPlayerStats(player: Player): PlayerObj | number {
  if (player.scores.length === 0) {
    return 0;
  }

  // write your code here
  const averageScores = player.scores.reduce((sum, item) => sum + item, 0);
  const average = averageScores / player.scores.length;
  // console.log(average);

  const rank = average >= 80 ? "MVP" : "Rokie";

  return { name: player.name, average: average, rank: rank };
}

// console.log(getPlayerStats({
//     name: "Nova",
//     scores: [90, 85, 95, 80],
//   }),
// );
// console.log(getPlayerStats({name: "Zex",scores: []}));

// Problem-6_____________________________________
type Tier = "free" | "pro" | "premium";

function canAccessOfflineMode(tier: Tier): boolean {
  // write your code here
  if (tier === "free") {
    return false;
  }
  return true;
}
// console.log(canAccessOfflineMode("free"));
// // false

// console.log(canAccessOfflineMode("pro"));
// // true

// console.log(canAccessOfflineMode("premium"));
// true

// console.log(canAccessOfflineMode("student"));
// error

// Problem-7_____________________________________:
interface MenuItem {
  name: string;
  price: number;
  tag: string;
}
function findMenuItemsByTag(menu: MenuItem[], tag: string): MenuItem[] {
  // write your code here
  const filter = menu.filter((item) => item.tag === tag);
  return filter;
}

const menu = [
  { name: "Veggie Bowl", price: 350, tag: "vegan" },
  { name: "Tofu Wrap", price: 300, tag: "vegan" },
  { name: "Chicken Wings", price: 450, tag: "spicy" },
  { name: "Beef Burger", price: 500, tag: "spicy" },
];

// console.log(findMenuItemsByTag(menu, "vegan"));;
// returns the Veggie Bowl and Tofu Wrap objects

// console.log(findMenuItemsByTag(menu, "gluten-free"));;
// returns an empty array

// Problem-8_____________________________________:
type LikeNotification = {
  type: "like";
  fromUser: string;
};
type SystemNotification = {
  type: "system";
  message: string;
  actionUrl?: string;
};
function renderNotification(
  notification: LikeNotification | SystemNotification,
): string {
  // write your code here
  if (notification.type === "like") {
    return `${notification.fromUser} liked your post`;
  } else if (notification.type === "system") {
    return notification.actionUrl
      ? `System: ${notification.message} (Tap to view)`
      : `System: ${notification.message}`;
  }
  return "";
}
// console.log(renderNotification({ type: "like", fromUser: "Aisha" }));
// "Aisha liked your post."

// console.log(renderNotification({ type: "system", message: "Maintenance complete." }));;
// "System: Maintenance complete."

// console.log(renderNotification({ type: "system", message: "Your subscription is expiring soon.", actionUrl: "/billing" }));;

// Problem-9_____________________________________:
interface UploadAction {
  type: "upload";
  sizeMB: number;
}
interface DeleteAction {
  type: "delete";
  sizeMB: number;
}
function updateStorageUsage(
  currentUsageMB: number,
  action: UploadAction | DeleteAction,
): number {
  if (action.sizeMB < 0) {
    return currentUsageMB;
  }

  // write your code here
  if (action.type === "upload") {
    return currentUsageMB + action.sizeMB;
  } else if (action.type === "delete") {
    if (currentUsageMB - action.sizeMB < 0) {
      return 0;
    }
    return currentUsageMB - action.sizeMB;
  }
  return currentUsageMB;
}
// console.log(updateStorageUsage(2000, { type: "upload", sizeMB: 500 }));
// console.log(updateStorageUsage(2000, { type: "delete", sizeMB: -100 }));

// Problem-10____________________________________
type VehicleType = "scooter" | "ebike" | "moped";

function calculateRentalFee(vehicle: VehicleType, minutes: number): number {
    if(vehicle !== 'scooter' && vehicle !== "ebike" &&  vehicle !== "moped"){
        return 0
    }
  // write your code here
  if (vehicle === "scooter") {
    return 10 + minutes * 2;
  } else if (vehicle === "ebike") {
    return 15 + minutes * 3;
  } else {
    return 25 + minutes * 5;
  };
}

console.log(calculateRentalFee("scooter", 20));
// 50    (10 + 20 x 2)

console.log(calculateRentalFee("ebike", 20));
// 75    (15 + 20 x 3)

console.log(calculateRentalFee("moped", 20));
// 125   (25 + 20 x 5)

console.log(calculateRentalFee("sdfwe", 20));
