import pic5 from '../../assets/5.png'
import Link from '@mui/material/Link'

const introduction = {
  title: `Intoduction to LEMV`,
  id: `intro-lemv`,
  image: pic5,
  alt: 'hands hold a rainbow colored array of vegetables',
  body: [
    <p>
      Livermore! Eat. More. Vegetables. (LEMV) was founded in 2022 by local
      Livermore residents looking to give back to our community and positively
      impact the health and wellbeing of everyone living in our city. We are
      currently planning a Needs Assessment to gather community feedback about
      Livermorians’ specific needs and current barriers to vegetable
      consumption.
    </p>,
    <p>
      To learn more about the people who make this possible, check out our “Who
      are we?” page on our main website:{' '}
      <Link href='/who' target='_blank'>
        www.lemv.org/who
      </Link>
    </p>
  ],
  tags: [`introduction`, `who`, `mission`, `needs assessment`, `livermore`]
}

export default introduction
