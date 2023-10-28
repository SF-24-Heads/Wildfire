import React from 'react'

const Rules = () => {
    return (
        <div className='flex gap-8 flex-col justify-center items-center my-7 min-h-[500px]'>
            <h1 className='text-7xl text-center font-semibold'>Rules</h1>
            <ol className='flex flex-col gap-4 font-medium text-lg list-decimal'>
                <li>
                    Offline prelims will be conducted in Bangalore, Delhi, Mumbai, Kolkata, Shillong
                    and Jaipur.
                </li>
                <li>
                    After the first round, a shortlist of bands would be released who will qualify to
                    perform at the main event at IIT Kharagpur.
                </li>
                <li>
                    The main event at IIT Kharagpur would consist of 2 rounds: prefinals and finals.
                </li>
                <li>
                    In prefinals at IIT Kharagpur, a group will be required to perform at least three
                    numbers of their choice within 20 minutes. (Amps on to amps off and inclusive of
                    sound check)
                </li>
                <li>
                    In finals, a group will be required to perform at least 4 numbers of their choice
                    within 40 minutes (Amps on to amps off inclusive of sound check).
                </li>
                <li>
                    Bands will be disqualified on the spot for misconduct, obscenity or foul
                    language, and will be banned from performing at all subsequent editions of spring
                    fest.
                </li>
                <li>
                    Only English and Hindi Rock Music are allowed
                </li>
                <li>
                    Equipment provided will be:
                    <ul className='list-disc ml-4'>
                        <li>
                            One bass amplifier speaker
                        </li>
                        <li>
                            One lead amplifier speaker
                        </li>
                        <li>
                            Adequate microphones
                        </li>
                        <li>
                            Drum set (Participants can bring along with
                            your own cymbals and chokes/high hats).
                        </li>
                    </ul>
                </li>
                <li>
                    Bands will have to bring their own musical instruments and special effects.
                    However, programmed music is not allowed.
                </li>
                <li>Spring Fest will not be held responsible for the failure of any instrument.</li>
            </ol>
        </div>
    )
}

export default Rules