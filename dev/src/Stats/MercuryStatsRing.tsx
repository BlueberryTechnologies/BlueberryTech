import {
  faClock,
  faComputer,
  faFloppyDisk,
  faMemory,
  faMicrochip,
  faPlug,
  faTemperatureThreeQuarters,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Center,
  Group,
  Paper,
  RingProgress,
  SimpleGrid,
  Text,
} from "@mantine/core";
import { useParseFileDynamic } from "../components/ParseFileDynamic";
import { convertMsToReadableString } from "../utils/convertMsToReadableString";

const icons = {
  cpu: faMicrochip,
  ram: faMemory,
  temp: faTemperatureThreeQuarters,
  disk: faFloppyDisk,
  wattage: faPlug,
  computer: faComputer,
  clock: faClock,
  terminal: faTerminal,
};

export function MercuryStatsRing() {
  const parsedData = useParseFileDynamic(); // Use the custom hook

  // Use parsedData values by index, with fallback values
  const cpuLoad = parsedData[0] ?? 0; // First value
  const cpuTemp = parsedData[1] ?? 0; // Second value
  const ramUsage = parsedData[2] ?? 0; // Third value
  const diskUsage = parsedData[3] ?? 0;
  const wattage = parsedData[4] ?? 0;
  const processes = parsedData[5] ?? 0;
  const downloadSpeed = parsedData[6] ?? 0;
  const uploadSpeed = parsedData[7] ?? 0;
  const uptime = convertMsToReadableString(parsedData[8]);

  const maxCPULoad = 100;
  const maxCPUTemp = 120;
  const maxRAMUsage = 100;
  const maxDiskUsage = 100;
  const maxWattage = 500;
  const maxNetworkSpeed = 1500;

  const data: Array<{
    label: string;
    stats: string;
    progress: number;
    color: string;
    icon: keyof typeof icons;
  }> = [
    {
      label: "Server",
      stats: "Mercury",
      progress: 100,
      color: "black",
      icon: "terminal",
    },
    {
      label: "Uptime",
      stats: uptime, // Use the resolved uptime value
      progress: 100,
      color: "black",
      icon: "clock",
    },
    {
      label: "Processes",
      stats: processes.toString(),
      progress: processes,
      color: "black",
      icon: "computer",
    },
    {
      label: "CPU Load",
      stats: cpuLoad.toString() + "%",
      progress: (cpuLoad / maxCPULoad) * 100,
      color: "red",
      icon: "cpu",
    },
    {
      label: "CPU Temp",
      stats: cpuTemp.toString() + "°C",
      progress: (cpuTemp / maxCPUTemp) * 100,
      color: "orange",
      icon: "temp",
    },
    {
      label: "RAM Usage",
      stats: ramUsage.toString() + "%",
      progress: (ramUsage / maxRAMUsage) * 100,
      color: "yellow",
      icon: "ram",
    },
    {
      label: "Disk Usage",
      stats: diskUsage.toString() + "%",
      progress: (diskUsage / maxDiskUsage) * 100,
      color: "green",
      icon: "disk",
    },
    {
      label: "Wattage",
      stats: wattage.toString() + "W",
      progress: (wattage / maxWattage) * 100,
      color: "blue",
      icon: "wattage",
    },
    {
      label: "Download / Upload",
      stats:
        downloadSpeed.toString() +
        " Mbps / " +
        uploadSpeed.toString() +
        " Mbps",
      progress: (downloadSpeed / maxNetworkSpeed) * 100,
      color: "purple",
      icon: "wattage",
    },
  ];

  const stats = data.map((stat) => {
    const Icon = icons[stat.icon];
    return (
      <Paper withBorder radius="md" p="xs" key={stat.label}>
        <Group>
          <RingProgress
            size={80}
            roundCaps
            thickness={8}
            sections={[{ value: stat.progress, color: stat.color }]}
            label={
              <Center>
                <FontAwesomeIcon icon={Icon} />
              </Center>
            }
          />

          <div>
            <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
              {stat.label}
            </Text>
            <Text fw={700} size="xl">
              {stat.stats}
            </Text>
          </div>
        </Group>
      </Paper>
    );
  });

  return <SimpleGrid cols={{ base: 1, sm: 3 }}>{stats}</SimpleGrid>;
}
