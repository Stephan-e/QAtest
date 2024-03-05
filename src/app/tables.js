import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

export default function DataTable() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (val) => {
        setOpen(val);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 40,
          renderCell: (params) => {
              return(
                  <div onClick={()=>handleClickOpen(params.row)}>
                      { params.value}
                  </div>
              )
          },
      
      },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 90,
        },
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
      ];
      
      const rows = [
        {
          id: 1,
          lastName: "Snow",
          firstName: "Jon",
          age: 35,
          description: {
            physicalAppearance: "Jon Snow has a long face, dark hair, and grey eyes. He possesses a lean and wiry build, a result of his rigorous training as a member of the Night's Watch.",
            background: "Jon Snow is the illegitimate son of Eddard Stark, Lord of Winterfell. Raised alongside his legitimate siblings in the Stark household, Jon always felt like an outsider due to his bastard status. Despite this, he received a decent education and training in swordsmanship.",
            characterTraits: "Jon Snow is characterized by his strong sense of honor and duty, inherited from his father, Eddard Stark. He is introspective and thoughtful, often grappling with questions of identity, belonging, and duty.",
            journey: "Jon's journey begins when he joins the Night's Watch, a sworn brotherhood tasked with guarding the Wall against the threats beyond, such as the White Walkers and wildlings. Despite facing prejudice and hardship as a bastard, Jon rises through the ranks to become Lord Commander of the Night's Watch.",
            relationships: "Jon forms deep bonds with several key characters throughout the series, including his siblings Arya and Robb Stark, as well as his friends Samwell Tarly and Tormund Giantsbane. His romantic relationship with Ygritte, a wildling woman, is significant in his character development.",
            arc: "Jon's arc is marked by themes of honor, sacrifice, and the struggle between duty and love. He grapples with his identity as both a Stark and a Targaryen, as well as his role in the conflicts that engulf the realm. Ultimately, his destiny leads him to confront the threat of the White Walkers and contend for the Iron Throne.",
            legacy: "Jon Snow's legacy is one of courage and leadership. He is remembered as a hero who stood against the darkness and fought for the realm, regardless of personal cost. His actions shape the course of history in Westeros and leave an indelible mark on those who knew him."
          }
        },
        {
          id: 2,
          lastName: "Lannister",
          firstName: "Cersei",
          age: 42,
          description: {
            physicalAppearance: "Cersei Lannister is known for her striking beauty, with blonde hair, green eyes, and a regal bearing.",
            background: "As a member of House Lannister, Cersei is born into one of the most powerful families in Westeros. She is the daughter of Tywin Lannister and the sister of Jaime and Tyrion Lannister. Cersei becomes Queen of the Seven Kingdoms through her marriage to King Robert Baratheon.",
            characterTraits: "Cersei is ambitious, manipulative, and fiercely protective of her children. She is willing to go to great lengths to maintain her power and influence.",
            journey: "Cersei's journey is marked by her rise to power through cunning and manipulation. She faces numerous challenges to her rule, including threats from within her own family and from rival houses.",
            relationships: "Cersei has complex relationships with her family, particularly her twin brother Jaime. She also forms alliances and rivalries with various characters throughout the series, including her husband King Robert Baratheon and the High Sparrow.",
            arc: "Cersei's arc is marked by her pursuit of power and vengeance against her enemies. She is willing to do whatever it takes to protect herself and her family, even if it means betraying those closest to her.",
            legacy: "Cersei leaves a legacy of ruthlessness and ambition. She is known for her cunning and determination, as well as her willingness to do whatever it takes to achieve her goals."
          }
        },
        {
          id: 3,
          lastName: "Lannister",
          firstName: "Jaime",
          age: 41,
          description: {
            physicalAppearance: "Jaime Lannister is known for his handsome features, with blonde hair, green eyes, and a confident demeanor.",
            background: "Jaime is a member of House Lannister, born into one of the most powerful families in Westeros. He is the eldest son of Tywin Lannister and the twin brother of Cersei Lannister. Jaime is known as the Kingslayer for his role in killing King Aerys II Targaryen during Robert's Rebellion.",
            characterTraits: "Jaime is a complex and conflicted character, struggling with questions of honor and duty. Despite his reputation as the Kingslayer, he is capable of acts of courage and compassion.",
            journey: "Jaime's journey begins as a renowned knight, but he experiences a dramatic transformation over the course of the series. He undergoes a journey of redemption and self-discovery, grappling with his past and striving to become a better person.",
            relationships: "Jaime has a complicated relationship with his sister Cersei, with whom he shares a deep and passionate bond. He also forms strong bonds with his brother Tyrion and with Brienne of Tarth, a fellow knight.",
            arc: "Jaime's arc is marked by his evolution from a morally ambiguous figure to a more nuanced and honorable character. He learns to confront his own flaws and to take responsibility for his actions, ultimately striving to redeem himself.",
            legacy: "Jaime is known for his deeds as the Kingslayer, but he is ultimately remembered for his redemption and sacrifice. He leaves behind a legacy of courage and honor, as well as a reputation for his skill and prowess as a knight."
          }
        },
        {
          id: 4,
          lastName: "Stark",
          firstName: "Arya",
          age: 25,
          description: {
            physicalAppearance: "Arya Stark has dark hair, expressive grey eyes, and a small and agile build.",
            background: "Arya is a member of House Stark, born into one of the noblest families in Westeros. She is the youngest daughter of Eddard Stark and Catelyn Stark. Arya is known for her independent spirit and her talent for swordfighting.",
            characterTraits: "Arya is independent, determined, and skilled in combat and deception. She refuses to conform to traditional gender roles and is determined to forge her own path in life.",
            journey: "Arya's journey takes her across Westeros and beyond, as she seeks revenge for the deaths of her family members and justice for the wrongs done to her. She undergoes extensive training as an assassin, learning to become a skilled killer.",
            relationships: "Arya forms alliances and friendships with a diverse array of characters throughout the series, including the Hound and Jaqen H'ghar. She also forms a close bond with her direwolf, Nymeria.",
            arc: "Arya's arc is marked by her transformation from a vengeful child to a skilled and ruthless assassin. She learns to embrace her identity as a Stark and to channel her anger and grief into a single-minded pursuit of justice.",
            legacy: "Arya leaves behind a legacy of resilience and independence. She is known for her skill as an assassin and for her unwavering pursuit of justice, even in the face of overwhelming odds."
          }
        },
        {
          id: 5,
          lastName: "Targaryen",
          firstName: "Daenerys",
          age: 30,
          description: {
            physicalAppearance: "Daenerys Targaryen is known for her silver-blonde hair, violet eyes, and regal bearing.",
            background: "Daenerys is the last surviving member of House Targaryen, a once-powerful dynasty that ruled the Seven Kingdoms of Westeros. She is the daughter of King Aerys II Targaryen and Queen Rhaella Targaryen.",
            characterTraits: "Daenerys is idealistic, determined, and capable of great compassion and ruthless violence. She is determined to reclaim the Iron Throne and restore her family's legacy.",
            journey: "Daenerys' journey begins as an exiled princess, but she rises to power through conquest and alliances. She builds an army and a following, seeking to reclaim the Iron Throne and to break the wheel of tyranny.",
            relationships: "Daenerys forms alliances and romantic relationships with various characters throughout the series, notably with Jon Snow. She also forms close bonds with her advisors and with her dragons, Drogon, Rhaegal, and Viserion.",
            arc: "Daenerys' arc is marked by her evolution from a vulnerable exile to a powerful ruler. She faces numerous challenges along the way, including the complexities of governance and the harsh realities of war.",
            legacy: "Daenerys leaves behind a legacy of ambition and idealism. She is known for her dragons and for her efforts to break the wheel of tyranny, even as her actions and decisions spark controversy and conflict."
          }
        },
        {
          id: 6,
          lastName: "",
          firstName: "Melisandre",
          age: 400,
          description: {
            physicalAppearance: "Melisandre has red hair, red eyes, and a tall and imposing presence.",
            background: "Melisandre is a priestess of the Lord of Light, a fiery deity worshipped in the lands of Essos. She serves as an advisor to Stannis Baratheon, a claimant to the Iron Throne.",
            characterTraits: "Melisandre is mysterious, devout, and skilled in magic and prophecy. She believes herself to be a chosen servant of the Lord of Light, destined to play a crucial role in the wars to come.",
            journey: "Melisandre's journey takes her across Westeros and Essos, as she serves as a powerful advisor and practitioner of dark magic. She becomes embroiled in the War of the Five Kings and the conflicts that follow.",
            relationships: "Melisandre forms alliances and rivalries with various characters throughout the series, notably with Stannis Baratheon. She also interacts with other followers of the Lord of Light, such as Thoros of Myr and Beric Dondarrion.",
            arc: "Melisandre's arc is marked by her unwavering faith and the consequences of her actions. She is forced to confront her own beliefs and limitations, as well as the role she plays in the conflicts of Westeros.",
            legacy: "Melisandre leaves behind a legacy of mysticism and manipulation. She is known for her involvement in the conflicts of Westeros and her devotion to the Lord of Light, even as her actions and decisions spark controversy and conflict."
          }
        },
        {
          id: 7,
          lastName: "",
          firstName: "Clifford",
          age: null,
          description: {
            physicalAppearance: "Clifford Ferrara is tall, muscular, with dark hair and piercing blue eyes.",
            background: "Clifford Ferrara is a mercenary and sellsword, known for his prowess in combat. He travels across the Free Cities, seeking employment and adventure.",
            characterTraits: "Clifford Ferrara is brave, skilled, and loyal to those he serves. He is willing to take on dangerous missions and fight for a cause he believes in.",
            journey: "Clifford's journey takes him across the Free Cities, as he seeks employment and adventure. He faces numerous challenges along the way, including battles and betrayals.",
            relationships: "Clifford forms alliances and friendships with fellow mercenaries and adventurers. He also interacts with various clients and employers, including noble houses and wealthy merchants.",
            arc: "Clifford's arc is marked by his experiences in battle and his pursuit of wealth and glory. He learns to navigate the dangerous world of mercenaries and sellswords, facing both triumphs and setbacks.",
            legacy: "Clifford Ferrara leaves behind a legacy of martial prowess and adventure. He is known for his deeds as a skilled sellsword, as well as his willingness to take on dangerous missions in pursuit of wealth and glory."
          }
        },
        {
          id: 8,
          lastName: "",
          firstName: "Rossini",
          age: null,
          description: {
            physicalAppearance: "Rossini is short and stout, with a round face and a jovial demeanor.",
            background: "Rossini is a baker and pastry chef, known for his delicious treats. He operates a bakery in a bustling market town, where he serves a variety of pastries and baked goods.",
            characterTraits: "Rossini is friendly, outgoing, and passionate about his craft. He takes pride in his baking skills and enjoys sharing his creations with others.",
            journey: "Rossini's journey takes him from humble beginnings to success as a baker and pastry chef. He faces challenges along the way, including competition from rival bakeries and fluctuations in the market.",
            relationships: "Rossini forms connections with a wide range of customers and vendors in the market town where he operates his bakery. He also interacts with his employees and suppliers, building relationships based on trust and mutual respect.",
            arc: "Rossini's arc is marked by his pursuit of excellence in baking and his efforts to build a successful business. He learns valuable lessons about entrepreneurship and resilience, overcoming obstacles to achieve his goals.",
            legacy: "Rossini leaves behind a legacy of delicious pastries and warm memories. He is remembered fondly by those who knew him, both for his baking skills and for his friendly and outgoing personality."
          }
        },
        {
          id: 9,
          lastName: "",
          firstName: "Roxie",
          age: null,
          description: {
            physicalAppearance: "Roxie Harvey is tall and statuesque, with striking red hair and piercing green eyes.",
            background: "Roxie Harvey is a renowned singer and performer, known for her powerful voice and charismatic stage presence. She travels from city to city, performing in theaters and concert halls.",
            characterTraits: "Roxie is confident, passionate, and fiercely independent. She thrives in the spotlight and enjoys the thrill of performing for a live audience.",
            journey: "Roxie's journey takes her from humble beginnings to fame and success as a singer and performer. She faces challenges along the way, including competition from rival performers and the pressures of life on the road.",
            relationships: "Roxie forms connections with a wide range of people in the entertainment industry, including fellow performers, producers, and fans. She also interacts with her bandmates and crew, building relationships based on trust and mutual respect.",
            arc: "Roxie's arc is marked by her pursuit of fame and success as a singer and performer. She learns valuable lessons about the highs and lows of life in the spotlight, navigating the complexities of fame and fortune.",
            legacy: "Roxie leaves behind a legacy of unforgettable performances and timeless music. She is remembered fondly by fans and fellow performers alike, both for her talent and for her fierce independence and passion."
          }
        }
      ];
      console.log("error invalid JSON ")
  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
      <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {open.firstName + " "+ open.lastName}
        </DialogTitle>
        <IconButton
          aria-label="close"
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
        <Typography fontWeight='bold'>
          Physical Appearance
        </Typography>
        <Typography gutterBottom>
        {open?.description?.physicalAppearance}
        </Typography>

        <Typography fontWeight='bold'>
        characterTraits
        </Typography>
        <Typography gutterBottom>
        {open?.description?.characterTraits}
        </Typography>

        <Typography fontWeight='bold'>
        background
        </Typography>
        <Typography gutterBottom>
        {open?.description?.background}
        </Typography>

        <Typography fontWeight='bold'>
        journey
        </Typography>
        <Typography gutterBottom>
        {open?.description?.journey}
        </Typography>

        <Typography fontWeight='bold'>
          Physical Appearance
        </Typography>
        <Typography gutterBottom>
        {open?.description?.physicalAppearance}
        </Typography>

        <Typography fontWeight='bold'>
        arc
        </Typography>
        <Typography gutterBottom>
        {open?.description?.arc}
        </Typography>

        <Typography fontWeight='bold'>
        legacy
        </Typography>
        <Typography gutterBottom>
        {open?.description?.legacy}
        </Typography>
          
        </DialogContent>
        <DialogActions>
          
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
    </div>
  );
}