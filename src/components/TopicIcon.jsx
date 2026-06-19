import { Monitor, Smartphone, Camera } from 'lucide-react';

const ICON_MAP = {
  monitor: Monitor,
  smartphone: Smartphone,
  camera: Camera,
};

export default function TopicIcon({ iconKey, ...props }) {
  const Icon = ICON_MAP[iconKey] ?? Monitor;
  return <Icon {...props} />;
}
