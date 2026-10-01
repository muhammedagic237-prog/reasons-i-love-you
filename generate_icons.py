# -*- coding: utf-8 -*-
"""
Pure standard-library PNG generator for PWA icons (192x192 and 512x512).
No external dependencies (uses standard struct and zlib).
"""

import struct
import zlib
import math

def create_heart_png(size, filename):
    width = size
    height = size
    raw_data = bytearray()

    cx = width / 2.0
    cy = height / 2.0
    scale = size / 32.0

    for y in range(height):
        raw_data.append(0)  # filter type 0 (None)
        ny = (cy - y) / scale  # Cartesian y
        for x in range(width):
            nx = (x - cx) / scale  # Cartesian x

            # Heart implicit equation: (x^2 + y^2 - 1)^3 - x^2 * y^3 <= 0
            # Scaled for nice proportions
            nx_scaled = nx * 0.12
            ny_scaled = ny * 0.12 + 0.3
            heart_val = (nx_scaled**2 + ny_scaled**2 - 1)**3 - (nx_scaled**2) * (ny_scaled**3)

            # Squircle background check
            corner_r = size * 0.25
            dx = max(0, abs(x - cx) - (size / 2 - corner_r))
            dy = max(0, abs(y - cy) - (size / 2 - corner_r))
            dist_sq = math.sqrt(dx*dx + dy*dy)
            in_squircle = dist_sq <= corner_r

            # Colors
            if not in_squircle:
                # Transparent outside squircle
                r, g, b, a = 0, 0, 0, 0
            else:
                # Background gradient
                grad_factor = y / float(height)
                bg_r = int(255 - grad_factor * 10)
                bg_g = int(241 - grad_factor * 15)
                bg_b = int(242 - grad_factor * 5)

                if heart_val <= 0:
                    # Inside heart: romantic red-rose gradient
                    heart_grad = (y - (cy - scale * 6)) / (scale * 14)
                    heart_grad = max(0.0, min(1.0, heart_grad))
                    r = int(251 - heart_grad * 60)
                    g = int(113 - heart_grad * 80)
                    b = int(133 - heart_grad * 60)
                    a = 255
                elif heart_val <= 0.15:
                    # Heart soft anti-aliased edge
                    t = heart_val / 0.15
                    r = int((1 - t) * 225 + t * bg_r)
                    g = int((1 - t) * 29 + t * bg_g)
                    b = int((1 - t) * 72 + t * bg_b)
                    a = 255
                else:
                    r, g, b, a = bg_r, bg_g, bg_b, 255

            raw_data.extend((r, g, b, a))

    def make_chunk(chunk_type, data):
        return struct.pack(">I", len(data)) + chunk_type + data + struct.pack(">I", zlib.crc32(chunk_type + data) & 0xffffffff)

    png_header = b"\x89PNG\r\n\x1a\n"
    ihdr_data = struct.pack(">IIBBBBB", width, height, 8, 6, 0, 0, 0)
    ihdr_chunk = make_chunk(b"IHDR", ihdr_data)
    idat_chunk = make_chunk(b"IDAT", zlib.compress(bytes(raw_data), 9))
    iend_chunk = make_chunk(b"IEND", b"")

    with open(filename, "wb") as f:
        f.write(png_header + ihdr_chunk + idat_chunk + iend_chunk)
    print(f"Generated {filename} ({size}x{size})")

create_heart_png(192, "icon-192.png")
create_heart_png(512, "icon-512.png")
