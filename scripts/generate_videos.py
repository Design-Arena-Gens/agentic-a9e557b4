#!/usr/bin/env python3
import random
import subprocess
from pathlib import Path
from shutil import copy2

OUTPUT_DIR = Path("videos")
WEB_PUBLIC = Path("web/public")
FONT_PATH = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
DURATION = 5  # seconds per clip
RESOLUTION = "1280x720"
FPS = 30

ENEMIES = [
    "Vegeta",
    "Freeza",
    "Cell",
    "Majin Buu",
    "Beerus",
    "Jiren",
    "Broly",
    "Raditz",
    "Nappa",
    "Zarbon",
    "Dodoria",
    "Recoome",
    "Burter",
    "Jeice",
    "Ginyu",
    "Dr. Gero",
    "Android 18",
    "Android 17",
    "Android 16",
    "Android 13",
    "Babidi",
    "Dabura",
    "Hit",
    "Topo",
    "Kefla",
    "Zamasu",
    "Goku Black",
    "Omega Shenron",
    "Baby Vegeta",
    "Turles",
]


def generate_color(seed: int) -> str:
    random.seed(seed)
    r = random.randint(30, 225)
    g = random.randint(30, 225)
    b = random.randint(30, 225)
    return f"#{r:02x}{g:02x}{b:02x}"


def build_segment(idx: int, enemy: str) -> Path:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    color = generate_color(idx)
    filename = OUTPUT_DIR / f"segment_{idx:02d}.mp4"
    title = f"Goku vs {enemy}"
    subtitle = f"Batalha {idx + 1}" if idx < len(ENEMIES) else f"Cena {idx + 1}"

    text_filter = (
        f"drawtext=fontfile={FONT_PATH}:text='{title}':fontcolor=white:fontsize=72:"
        f"x=(w-text_w)/2:y=(h/2-text_h),"
        f"drawtext=fontfile={FONT_PATH}:text='{subtitle}':fontcolor=white:fontsize=48:"
        f"x=(w-text_w)/2:y=(h/2+40)"
    )

    command = [
        "ffmpeg",
        "-y",
        "-f",
        "lavfi",
        "-i",
        f"color=c={color}:s={RESOLUTION}:r={FPS}:d={DURATION}",
        "-vf",
        text_filter,
        "-c:v",
        "libx264",
        "-pix_fmt",
        "yuv420p",
        str(filename),
    ]

    subprocess.run(command, check=True)
    return filename


def concatenate_segments(files: list[Path]) -> Path:
    concat_file = OUTPUT_DIR / "concat_list.txt"
    with concat_file.open("w", encoding="utf-8") as f:
        for file in files:
            f.write(f"file '{file.resolve()}'\n")

    output = OUTPUT_DIR / "goku_super_video.mp4"
    command = [
        "ffmpeg",
        "-y",
        "-f",
        "concat",
        "-safe",
        "0",
        "-i",
        str(concat_file),
        "-c",
        "copy",
        str(output),
    ]
    subprocess.run(command, check=True)
    return output


def export_to_web(final_video: Path, first_segment: Path) -> None:
    if not WEB_PUBLIC.exists():
        return

    target_video = WEB_PUBLIC / final_video.name
    copy2(final_video, target_video)

    poster_path = WEB_PUBLIC / "poster.png"
    poster_command = [
        "ffmpeg",
        "-y",
        "-i",
        str(first_segment),
        "-vframes",
        "1",
        str(poster_path),
    ]
    subprocess.run(poster_command, check=True)


def main() -> None:
    segments = []
    for idx, enemy in enumerate(ENEMIES):
        print(f"Gerando segmento {idx + 1}/30: Goku vs {enemy}")
        segment = build_segment(idx, enemy)
        segments.append(segment)

    print("Concatenando segmentos em um único vídeo...")
    final_video = concatenate_segments(segments)
    print(f"Vídeo final criado em: {final_video}")
    export_to_web(final_video, segments[0])


if __name__ == "__main__":
    main()
