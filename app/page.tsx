import { APP_URL } from "@/lib/constants"
import type { Metadata } from "next"
import { WhaleCastApp } from "../components/WhaleCast/WhaleCastApp"

const frame = {
  version: "next",
  imageUrl: `${APP_URL}/images/feed.png`,
  button: {
    title: "Launch WhaleCast",
    action: {
      type: "launch_frame",
      name: "WhaleCast - Trading Signals",
      url: APP_URL,
      splashImageUrl: `${APP_URL}/images/splash.png`,
      splashBackgroundColor: "#0B132B"
    }
  }
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "WhaleCast - Trading Signals",
    openGraph: {
      title: "WhaleCast - Trading Signals",
      description:
        "Follow the smart money. Get real-time trading signals from verified whales."
    },
    other: {
      "fc:frame": JSON.stringify(frame)
    }
  }
}

export default function Home() {
  return <WhaleCastApp />
}
