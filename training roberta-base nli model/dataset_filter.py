import pandas as pd

# Load dataset
df = pd.read_csv(
    "training gpt2 model/SD_0_All Utterances1.csv"
)

df = pd.read_csv("training gpt2 model/SD_0_All Utterances1.csv")

# Strip whitespace from Turn column before filtering
df["Turn"] = df["Turn"].str.strip()

df = df[df["Turn"] == "[S]"]

# Keep only student turns
df = df[df["Turn"] == "[S]"]

# Regions to keep
target_regions = [
    "PHL",
    "THA",
    "CHN",
    "JPN",
    "KOR",
    "PAK",
    "IDN"
]

# Filter regions
df["Region"] = df["Region"].str.strip().str.upper()

target_regions = ["PHL", "THA", "CHN", "JPN", "KOR", "PAK", "IDN"]
filtered_df = df[df["Region"].isin(target_regions)]

print(filtered_df["Region"].value_counts())

# Print summary
print("Rows:", len(filtered_df))

print("\nRegion counts:")
print(filtered_df["Region"].value_counts())

# Print selected columns
print("\nFiltered dataset:")
print(
    filtered_df[
        [
            "Speaker Code",
            "Region",
            "Utterances (W/o comments)"
        ]
    ]
)

# Save filtered dataset
filtered_df.to_csv(
    "student_turns_selected_regions.csv",
    index=False
)

print(
    "\nSaved to: student_turns_selected_regions.csv"
)